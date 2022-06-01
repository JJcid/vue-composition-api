<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ content }}</div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ CharactersLengthText }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <a @click.prevent="editNote" href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="deleteNote" href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";

/**
 * Props
 */
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
});

/**
 * Emits
 */

const emit = defineEmits(["delete-note", "edit-note"]);

/**
 * CharactersLengthText
 */
const CharactersLengthText = computed(() => {
  const length = props.content.length;
  return `${length} Caracter${length > 1 ? "es" : ""}`;
});

/**
 * Handle note events
 */
const editNote = () => {
  emit("edit-note", props.id);
};
const deleteNote = () => {
  emit("delete-note", props.id);
};
</script>

<style lang="scss" scoped></style>
