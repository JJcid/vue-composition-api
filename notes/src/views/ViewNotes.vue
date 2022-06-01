<template>
  <div class="notes" @keydown.escape="isShowingModal = false">
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
      @delete-note="showModal"
    ></note>
    <modal-delete-note
      @cancel="isShowingModal = false"
      title="Eliminar nota"
      v-model="isShowingModal"
    >
      ¿Está seguro de eliminar la nota {{ noteToDelete }}?
      <template #buttons>
        <button @click="isShowingModal = false" class="button">Cancelar</button>
        <button @click="deleteNote" class="button is-danger">Eliminar</button>
      </template>
    </modal-delete-note>
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
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";

/**
 * Store
 */
const storeNotes = useStoreNotes();

/**
 * Router
 */
const router = useRouter();

/**
 * Modal
 */
const isShowingModal = ref(false);

/**
 * Notes
 */
const newNote = ref("");
useWatchCharacters(newNote);
const newNoteRef = ref(null);
const noteToDelete = ref(null);

const addNewNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};

const showModal = (id) => {
  noteToDelete.value = id;
  isShowingModal.value = true;
};

const deleteNote = () => {
  storeNotes.deleteNote(noteToDelete.value);
  isShowingModal.value = false;
};

const goToEditNotePage = (id) => {
  router.push({ name: "editNote", params: { id } });
};
</script>
