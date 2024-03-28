export interface IGame {
  score1: number;
  score2: number;

  scoreboard(): string;
  isComplete(): boolean;
  player1Point(): void;
  player2Point(): void;
}

export class Game implements IGame {
  score1: number = 0;
  score2: number = 0;

  constructor() {
    //
  }

  scoreboard(): string {
    let scores = ["Love", "15", "30", "40", "Game"];

    if (this.score1 == this.score2) {
      scores = ["Love all", "15 all", "30 all", "Deuce", "Advantage", "Game"];
      return `${scores[this.score1]}`;
    }

    return `${scores[this.score1]} - ${scores[this.score2]}`;
  }

  isComplete(): boolean {
    if ((this.score1 !== this.score2 && this.score1 == 4) || this.score2 == 4) {
      return true;
    }

    return false;
  }

  player1Point(): void {
    if (!this.isComplete()) {
      this.score1++;
    }
  }

  player2Point(): void {
    if (!this.isComplete()) {
      this.score2++;
    }
  }
}
