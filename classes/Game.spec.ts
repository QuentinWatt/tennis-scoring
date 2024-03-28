import { beforeEach, describe, expect, it } from "vitest";
import { Game } from "./Game";

describe("It passes the Game Class test", () => {
  let game: Game;
  // Setup a new game for each test
  beforeEach(() => {
    game = new Game();
  });

  it("Has default values for the scoreboard", () => {
    expect(game.score1).toEqual(0);
    expect(game.score2).toEqual(0);
    expect(game.scoreboard()).toEqual("Love all");
  });

  it("Can increase the player 1 score", () => {
    expect(game.scoreboard()).toEqual("Love all");
    game.player1Point();
    expect(game.scoreboard()).toEqual("15 - Love");
    game.player1Point();
    expect(game.scoreboard()).toEqual("30 - Love");
    game.player1Point();
    expect(game.scoreboard()).toEqual("40 - Love");
  });

  it("Can increase the player 2 score", () => {
    expect(game.scoreboard()).toEqual("Love all");
    game.player2Point();
    expect(game.scoreboard()).toEqual("Love - 15");
    game.player2Point();
    expect(game.scoreboard()).toEqual("Love - 30");
    game.player2Point();
    expect(game.scoreboard()).toEqual("Love - 40");
  });

  it("Can suffix 'all', or Duece to equal scores", () => {
    expect(game.scoreboard()).toEqual("Love all");
    game.player1Point();
    game.player2Point();
    expect(game.scoreboard()).toEqual("15 all");

    game.player1Point();
    game.player2Point();
    expect(game.scoreboard()).toEqual("30 all");

    game.player1Point();
    game.player2Point();
    expect(game.scoreboard()).toEqual("Deuce");
  });

  it("Completes the game when player 1 has scored 4 points", () => {
    expect(game.scoreboard()).toEqual("Love all");
    game.player1Point();
    game.player1Point();
    game.player1Point();
    game.player1Point();
    expect(game.scoreboard()).toEqual("Game - Love");
    expect(game.isComplete()).toBe(true);
  });

  it("Completes the game when player 2 has scored 4 points", () => {
    expect(game.scoreboard()).toEqual("Love all");
    game.player2Point();
    game.player2Point();
    game.player2Point();
    game.player2Point();
    expect(game.scoreboard()).toEqual("Love - Game");
    expect(game.isComplete()).toBe(true);
  });
});
