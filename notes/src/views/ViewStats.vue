<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Número de notas</td>
          <td>
            <b>{{ storeNotes.notes.length }}</b>
          </td>
        </tr>
        <tr>
          <td>Nº Caracteres (de todas las notas)</td>
          <td>
            <b>{{ storeNotes.getTotalCharactersOfAllNotes }}</b>
          </td>
        </tr>
      </tbody>
    </table>
    <input
      v-autofocus
      v-model="loveNoteballs"
      type="text"
      class="input"
      placeholder="¿Te gusta Noteballs?"
      :maxlength="100"
    />
  </div>
</template>

<script setup>
import { useStoreNotes } from "../store/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { ref } from "vue";
import { useWatchCharacters } from "../use/useWatchCharacters";

const storeNotes = useStoreNotes();
const loveNoteballs = ref("");
useWatchCharacters(loveNoteballs, 50);
</script>

<style lang="scss" scoped></style>
