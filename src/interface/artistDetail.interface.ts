/* eslint-disable no-unused-vars */
export interface ArtistDetail {
  albums: { [key: string]: Album };
  artists: Artist[];
  songs: { [key: string]: Album };
}

export interface Album {
  attributes?: AlbumAttributes;
  href: string;
  id: string;
  type: Type;
}

export interface Artist {
  attributes: Attributes;
  relationships: Relationships;
  views: Views;
  meta: Meta;
}

export interface AlbumAttributes {
  albumName?: string;
  artistName: string;
  artwork: Artwork;
  audioLocale?: string;
  audioTraits: AudioTrait[];
  composerName?: string;
  copyright?: string;
  discNumber?: number;
  durationInMillis?: number;
  genreNames: GenreName[];
  hasLyrics?: boolean;
  hasTimeSyncedLyrics?: boolean;
  isAppleDigitalMaster?: boolean;
  isCompilation?: boolean;
  isComplete?: boolean;
  isMasteredForItunes: boolean;
  isPrerelease?: boolean;
  isSingle?: boolean;
  isrc?: string;
  name: string;
  playParams: PlayParams;
  previews?: Preview[];
  recordLabel?: string;
  releaseDate: Date;
  trackCount?: number;
  trackNumber?: number;
  upc?: string;
  url: string;
}

export interface Artwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}
export enum AudioTrait {
  HiResLossless = 'hi-res-lossless',
  Lossless = 'lossless',
  LossyStereo = 'lossy-stereo',
}

export enum GenreName {
  KPop = 'K-Pop',
  Music = 'Music',
  Pop = 'Pop',
  Soundtrack = 'Soundtrack',
  TVSoundtrack = 'TV Soundtrack',
}
export interface PlayParams {
  id: string;
  kind: string;
}

export interface Preview {
  url: string;
}
export enum Type {
  Albums = 'albums',
  Songs = 'songs',
}
export interface Attributes {
  artwork: Artwork;
  genreNames: string[];
  name: string;
  url: string;
}

export interface Meta {
  views: MetaViews;
}

export interface MetaViews {
  order: string[];
}

export interface Relationships {
  albums: Albums;
}

export interface Albums {
  data: Album[];
  href: string;
}

export interface Views {
  'latest-release': LatestRelease;
  'top-songs': LatestRelease;
}

export interface LatestRelease {
  attributes: LatestReleaseAttributes;
  data: Album[];
  href: string;
}

export interface LatestReleaseAttributes {
  title: string;
}
