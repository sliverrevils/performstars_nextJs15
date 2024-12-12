export interface IVideoLite {
    champ: string | undefined;
    date: string;
    duration: number;
    fps: number;
    game: string;
    players: string[];
    score: (number | string | null)[];
    status: string | undefined;
    team: string | undefined;
    url: string;
}
