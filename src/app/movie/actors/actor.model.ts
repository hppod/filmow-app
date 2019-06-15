export interface Actor {
    ID: number
    CHARACTER_NAME: string
    NAME: string
    BORNDATE: Date
    ACTOR_URL: string
}

export interface ActorMovies {
    ID: number
    TITLE: string
    CHARACTER_NAME: string
    POSTER_URL: string
}