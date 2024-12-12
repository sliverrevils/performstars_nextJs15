import mongoose, { Model } from "mongoose";

export interface IVideo {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    a: undefined;
    abr: number | undefined;
    acodec: string | undefined;
    arch: boolean | undefined;
    areas: number[] | undefined;
    asr: number | undefined;
    audio: number | undefined;
    author: string | undefined;
    bad: number | undefined;
    begin: number | undefined;
    brak: boolean | undefined;
    breakChange: string | undefined;
    breaks: number | undefined;
    c: number | boolean | undefined;
    camera: string | undefined;
    cameras: string | undefined;
    camerasMap: {
        frame: number;
        image: string;
        isTop: boolean | undefined;
        itag: number | undefined;
        long: undefined;
        points: {
            x: number;
            y: number;
        };
        pointsMean: {
            w: number;
            x: number;
            y: number;
        };
        rails: number[] | undefined;
        short: undefined;
        tableArea: number | undefined;
        tableColor: {
            w: number;
            x: number;
            y: number;
            z: number;
        }[];
        view: number | undefined;
    };
    champ: string | undefined;
    company: string | undefined;
    compare: boolean | undefined;
    cover: string | undefined;
    d: number | string | undefined;
    data: undefined;
    date: number | string | undefined;
    day: string | undefined;
    description: String | null | undefined;
    detailes: string | undefined;
    download: boolean;
    duration: number | undefined;
    duration_hms: string | undefined;
    email: boolean | undefined;
    ext: string | undefined;
    fid: string | undefined;
    filesize: number | null | undefined;
    find: number | undefined;
    format: string | undefined;
    format_id: string | undefined;
    formats:
        | {
              approxDurationMs: string;
              audioBitrate: number | null | undefined;
              audioChannels: number | undefined;
              audioCodec: string | undefined;
              audioQuality: string | undefined;
              audioSampleRate: string | undefined;
              averageBitrate: number | undefined;
              bitrate: number;
              codecs: string;
              colorInfo: {
                  matrixCoefficients: string | undefined;
                  primaries: string;
                  transferCharacteristics: string;
              };
              container: string;
              contentLength: string | undefined;
              fps: number | undefined;
              hasAudio: boolean;
              hasVideo: boolean;
              height: number | undefined;
              highReplication: boolean | undefined;
              indexRange: {
                  end: string;
                  start: string;
              };
              initRange: {
                  end: string;
                  start: string;
              };
              isDashMPD: boolean;
              isDrc: boolean | undefined;
              isHLS: boolean;
              isLive: boolean;
              itag: number;
              lastModified: string;
              loudnessDb: number | undefined;
              mimeType: string;
              projectionType: string;
              quality: string;
              qualityLabel: string | null;
              trackAbsoluteLoudnessLkfs: number | undefined;
              url: string;
              videoCodec: string | undefined;
              width: number | undefined;
              xtags: string | undefined;
          }[]
        | undefined;
    fps: number | undefined;
    frame1: string | undefined;
    frame2: string | undefined;
    frame3: string | undefined;
    frames: number | undefined;
    framesArr:
        | {
              b: number;
              c: number | undefined;
              f: number;
              m: number;
              move: number | undefined;
              y: number | undefined;
          }
        | undefined;
    framesArrProg: number | undefined;
    framesMap: {
        1: number[];
        2: number[];
        3: number[];
        4: number[];
    }[];
    framing: boolean;
    game: string | undefined;
    gameType: string | undefined;
    good: number | undefined;
    gr: undefined;
    hasCounter: boolean | undefined;
    height: number | undefined;
    hogsarr: boolean | undefined;
    ie: string | null | undefined;
    itag: number | undefined;
    lastCropPart: number | undefined;
    lastTrackFrame: number | undefined;
    license: null | undefined;
    likes: number | null | undefined;
    live: boolean | undefined;
    local: string | undefined;
    manifest_url: string | undefined;
    metadata:
        | {
              album: string;
              artist: string;
              audio: {
                  bitrate: string;
                  channels: {
                      raw: string;
                      value: string | number;
                  };
                  codec: string;
                  sample_rate: number;
                  stream: number;
              };
              date: string;
              duration: {
                  raw: string;
                  seconds: number;
              };
              filename: string;
              synched: boolean;
              title: string;
              track: string;
              video: {
                  aspect: {
                      string: string;
                      value: number;
                      x: number;
                      y: number;
                  };
                  bitrate: number;
                  codec: string;
                  container: string;
                  fps: number;
                  pixel: number;
                  pixelString: string;
                  resolution: {
                      h: number;
                      w: number;
                  };
                  resolutionSquare: {
                      h: number;
                      w: number;
                  };
                  rotate: number;
                  stream: number;
              };
          }
        | undefined;
    mid: string;
    mindBegin: string | undefined;
    mindEnd: string | boolean | undefined;
    mindProg: number | undefined;
    note: string | undefined;
    onSite: boolean | undefined;
    p: string[] | undefined;
    parts: number | undefined;
    path: string | boolean;
    payed: string | boolean | undefined;
    player1: string | undefined;
    player2: string | undefined;
    players: string[] | undefined;
    playersTeam: string[] | undefined;
    points:
        | {
              view: string | undefined;
              x: number;
              y: number;
          }[]
        | undefined;
    pre: boolean | undefined;
    preference: undefined;
    private: boolean | undefined;
    proceed: boolean | undefined;
    processing: string | undefined;
    sampleRate: number | undefined;
    score: (string | number | null)[] | undefined;
    shots: number | undefined;
    shotsin: undefined;
    shotsin2: undefined;
    size: number | undefined;
    source: boolean | undefined;
    ssr: boolean | undefined;
    stage: string | undefined;
    status: string | undefined;
    statusCode: number | undefined;
    stream: string | undefined;
    suggest: number | undefined;
    t: string | undefined;
    tableArea: number | undefined;
    tableColor: {
        w: number;
        x: number;
        y: number;
        z: number;
    };
    tableColorImg: string | undefined;
    tableSize: string | undefined;
    tbr: number | undefined;
    team: string | undefined;
    test: string | undefined;
    thumbnail: string | undefined;
    title: string | undefined;
    type: string;
    url: string | undefined;
    user: string | undefined;
    v: number | undefined;
    vcodec: string | undefined;
    videoType: string | undefined;
    viewCount: string | undefined;
    views: undefined;
    viewsFull: string[] | undefined;
    viewsPoints: any[] | undefined;
    viewsPrev: string[] | undefined;
    width: number | undefined;
    wins: number | undefined;
    xshots: number | undefined;
    year: number | string | undefined;
}

export const Video: Model<IVideo> = mongoose.models?.Video || mongoose.model<IVideo>("Video", new mongoose.Schema({ _id: { type: String, required: true } }, { strict: false }));
