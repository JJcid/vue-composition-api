<template>
  <div class="notes">
    <div class="p-4 mb-5 has-background-warning">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            v-model="newNote"
            class="textarea"
            placeholder="Añade el texto de la nota..."
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNewNote"
            :disabled="!newNote"
            class="button has-background-warning-light"
          >
            Añadir nota
          </button>
        </div>
      </div>
    </div>

    <note
      v-for="note in notes"
      :key="note.id"
      :id="note.id"
      :content="note.content"
      @deleteNote="deleteNote"
    ></note>
  </div>
</template>

<script setup>
/**
 * imports
 */
import { ref } from "vue";
import Note from "../components/Notes/Note.vue";
/**
 * Notes
 */

const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem saepe,
          molestias autem voluptatem tempore porro necessitatibus voluptatibus quasi
          repudiandae fugit ea distinctio. Amet voluptas architecto doloremque cupiditate
          distinctio necessitatibus?`,
  },
  {
    id: "id2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem saepe,
          molestias autem voluptatem tempore porro necessitatibus voluptatibus quasi
          repudiandae fugit ea distinctio. Amet voluptas architecto doloremque cupiditate
          distinctio necessitatibus?`,
  },
  {
    id: "id3",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem saepe,
          molestias autem voluptatem tempore porro necessitatibus voluptatibus quasi
          repudiandae fugit ea distinctio. Amet voluptas architecto doloremque cupiditate
          distinctio necessitatibus?`,
  },
]);

const addNewNote = () => {
  const id = new Date().getTime().toString();
  notes.value.unshift({
    id,
    content: newNote.value,
  });
  newNote.value = "";
  newNoteRef.value.focus();
};

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id != id);
};
</script>
