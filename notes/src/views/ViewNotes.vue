<template>
  <div class="notes">
    <add-edit-note ref="newNoteRef" v-model="newNote">
      <template #buttons>
        <button
          @click="addNewNote"
          :disabled="!newNote"
          class="button has-background-warning-light"
        >
          Añadir nota
        </button>
      </template>
    </add-edit-note>
    <note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :id="note.id"
      :content="note.content"
      @edit-note="goToEditNotePage"
      @delete-note="storeNotes.deleteNote"
    ></note>
  </div>
</template>

<script setup>
/**
 * imports
 */
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStoreNotes } from "../store/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";
import Note from "../components/Notes/Note.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";

/**
 * Store
 */
const storeNotes = useStoreNotes();

/**
 * Router
 */
const router = useRouter();

/**
 * Notes
 */
const newNote = ref("");
useWatchCharacters(newNote);
const newNoteRef = ref(null);

const addNewNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};

const goToEditNotePage = (id) => {
  router.push({ name: "editNote", params: { id } });
};
</script>
