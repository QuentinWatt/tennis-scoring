<script setup lang="ts" >
import { Game } from "../classes/Game.ts"

const data = reactive({
  game: new Game() as Game
})

const addPlayer1Point = () => {
  data.game.player1Point()
}

const addPlayer2Point = () => {
  data.game.player2Point()
}

const restartGame = () => {
  data.game = new Game()
}
</script>

<template>
  <main class="py-12">
    <div class="text-center mb-6">
      <h2 class="font-bold text-3xl flex flex-col">
        <span class="text-sm font-thin">Score:</span>
        {{ data.game.scoreboard() }}
      </h2>
    </div>
    <div v-if="!data.game.isComplete()" class="grid grid-cols-2 gap-2 max-w-md mx-auto">
      <button class="button player-1" @click="addPlayer1Point">Blue Score</button>
      <button class="button player-2" @click="addPlayer2Point">Red Score</button>
    </div>
    <div v-else>
      <div class="flex flex-col items-center">
        <span class="font-bold text-center text-4xl mb-3">Game Complete!</span>
        <button class="button" @click="restartGame">Restart</button>
      </div>
    </div>
  </main>
</template>