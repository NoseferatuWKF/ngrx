import { Stats } from './stats-model'

export interface Actor {
    id: number;
    name: string;
    level: number;
    stats: Stats;
    isEnemy: boolean;
}
