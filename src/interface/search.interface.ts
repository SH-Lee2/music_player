/* eslint-disable no-unused-vars */
export interface Search {
  artists: Artists;
  tracks: Tracks;
}

export interface Artists {
  hits: ArtistsHit[];
}

export interface ArtistsHit {
  artist: HitArtist;
}

export interface HitArtist {
  adamid: string;
  avatar?: string;
  name: string;
  verified: boolean;
  weburl: string;
}

export interface Tracks {
  hits: TracksHit[];
}

export interface TracksHit {
  track: Track;
}

export interface Track {
  artists: ArtistElement[];
  hub: Hub;
  images: TrackImages;
  key: string;
  layout: string;
  share: Share;
  subtitle: string;
  title: string;
  type: TrackType;
  url: string;
}

export interface ArtistElement {
  adamid: string;
  id: string;
}

export interface Hub {
  actions: Action[];
  displayname: Displayname;
  explicit: boolean;
  image: string;
  options: Option[];
  providers: Provider[];
  type: HubType;
}

export interface Action {
  id?: string;
  name: Name;
  type: ActionType;
  uri?: string;
}

export enum Name {
  Apple = 'apple',
  HubApplemusicAndroidstore = 'hub:applemusic:androidstore',
  HubApplemusicConnect = 'hub:applemusic:connect',
  HubApplemusicDeeplink = 'hub:applemusic:deeplink',
  HubDeezerSearchdeeplink = 'hub:deezer:searchdeeplink',
  HubSpotifySearchdeeplink = 'hub:spotify:searchdeeplink',
  HubYoutubemusicAndroiddeeplink = 'hub:youtubemusic:androiddeeplink',
}

export enum ActionType {
  Applemusicconnect = 'applemusicconnect',
  Applemusicplay = 'applemusicplay',
  Intent = 'intent',
  URI = 'uri',
}

export enum Displayname {
  AppleMusic = 'APPLE MUSIC',
}

export interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: OptionCaption;
  colouroverflowimage: boolean;
  image: string;
  listcaption: Listcaption;
  overflowimage: string;
  providername: Providername;
  type: BeacondataType;
}

export interface Beacondata {
  providername: Providername;
  type: BeacondataType;
}

export enum Providername {
  Applemusic = 'applemusic',
}

export enum BeacondataType {
  Open = 'open',
}

export enum OptionCaption {
  Open = 'OPEN',
}

export enum Listcaption {
  OpenInAppleMusic = 'Open in Apple Music',
}

export interface Provider {
  actions: Action[];
  caption: ProviderCaption;
  images: ProviderImages;
  type: ProviderType;
}

export enum ProviderCaption {
  OpenInDeezer = 'Open in Deezer',
  OpenInSpotify = 'Open in Spotify',
  OpenInYouTubeMusic = 'Open in YouTube Music',
}

export interface ProviderImages {
  default: string;
  overflow: string;
}

export enum ProviderType {
  Deezer = 'DEEZER',
  Spotify = 'SPOTIFY',
  Youtubemusic = 'YOUTUBEMUSIC',
}

export enum HubType {
  Applemusic = 'APPLEMUSIC',
}

export interface TrackImages {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

export enum TrackType {
  Music = 'MUSIC',
}
