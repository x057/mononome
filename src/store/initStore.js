import _ from 'lodash';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default async () => {
  const space = '68ok7tipjv1r';
  const accessToken = 'sB7N7xpCtD0a5Mq9GbwVAoqAoCEFrez7lgARaoBvOgU';
  const client = contentful.createClient({space, accessToken});

  try {
    const entries = await client.getEntries();
    const parsedEntries = client.parseEntries(entries);
    const releases = getReleases(parsedEntries);
    const latestRelease = _.first(releases);
    const artist = getArtist(parsedEntries);
    const sections = getSections(parsedEntries);
    const videos = getVideos(parsedEntries);
    return { artist, releases, latestRelease, sections, videos };
  } catch (error) {
    return { error };
  }
};

function getReleases({items}) {
  return _.chain(items)
    .filter((item) => _.get(item, 'sys.contentType.sys.id') === 'release')
    .map(({sys: {id}, fields}) => {
      const image = _.get(fields, 'cover.fields.file.url', '');
      return _.chain({id, image}).assign(fields).omit('cover').valueOf();
    })
    .orderBy(['releaseDate'], ['desc'])
    .valueOf();
}

function getArtist({items}) {
  return _.chain(items)
    .filter((item) => _.get(item, 'sys.contentType.sys.id') === 'artist')
    .map(({sys: {id}, fields}) => {
      const image = _.get(fields, 'image.fields.file.url', '');
      const about = documentToHtmlString(fields.about);
      const links = _.omit(fields, ['image', 'about']);
      return {id, image, about, links};
    })
    .first()
    .valueOf();
}

function getSections({items}) {
  return _.chain(items)
    .filter((item) => _.get(item, 'sys.contentType.sys.id') === 'section')
    .map(({fields}) => {
      const backgroundImage = _.get(fields, 'backgroundImage.fields.file.url', '');
      return _.defaults({backgroundImage}, fields);
    })
    .keyBy('id')
    .valueOf();
}

function getVideos({items}) {
  return _.chain(items)
    .filter((item) => _.get(item, 'sys.contentType.sys.id') === 'youTubeVideo')
    .map(({fields}) => {
      const {id} = fields;
      const thumbnail = _.get(fields, 'thumbnail.fields.file.url', '') || `//img.youtube.com/vi/${id}/0.jpg`;
      return _.defaults({thumbnail}, fields);
    })
    .valueOf();
}