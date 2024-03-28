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

  scoreboard(): string {
    let scores: string[] = ["Love", "15", "30", "40"];

    if (this.score1 == this.score2 && this.score1 <= 3) {
      scores = ["Love all", "15 all", "30 all", "Deuce"];
      return `${scores[this.score1]}`;
    }

    if (this.score1 >= 3 && this.score2 >= 3) {
      const prefix =
        Math.abs(this.score1 - this.score2) >= 2 ? "Game" : "Advantage";

      if (this.score1 > this.score2) {
        return `${prefix} - ${scores[this.score2] ?? this.score2}`;
      } else if (this.score1 < this.score2) {
        return `${scores[this.score1] ?? this.score1} - ${prefix}`;
      }

      return "Deuce";
    }

    scores = ["Love", "15", "30", "40", "Game"];
    return `${scores[this.score1]} - ${scores[this.score2]}`;
  }

  isComplete(): boolean {
    return (
      (this.score1 >= 4 || this.score2 >= 4) &&
      Math.abs(this.score1 - this.score2) >= 2
    );
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
