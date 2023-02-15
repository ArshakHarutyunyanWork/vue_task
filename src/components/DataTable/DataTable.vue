<template>
  <div class="dataTable">
    <TransitionGroup
      name="list"
      tag="div"
    >
      <div
        v-for="plan in plans"
        :key="plan._id"
        class="dataTable__item"
      >
        <p class="dataTable__itemTitle">
          {{ plan.title }}
        </p>
        <div class="dataTable__status">
          <p
            class="dataTable__statusText"
            :class="{
              'dataTable__statusText--green': plan.status === 'completed',
              'dataTable__statusText--blue': plan.status === 'booked',
              'dataTable__statusText--lightBlue': plan.status === 'bookNow',
            }"
          >
            {{ plan.status }}
          </p>
          <div class="dataTable__edit">
            <button
              class="dataTable__editBtn"
              @click="openTools(plan._id)"
            />
            <Transition name="menu">
              <div
                v-if="plan._id == activeBtnId"
                class="dataTable__menu"
              >
                <button
                  class="dataTable__menuBtn"
                  @click="deletePlan(plan._id)"
                >
                  Delete
                </button>
                <button
                  class="dataTable__menuBtn dataTable__menuBtn--edit"
                  @click="openEdit(plan._id, plan.title)"
                >
                  Edit
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="showModal"
        class="modal"
        @click.self="showModal = false"
      >
        <div class="modal__container">
          <textarea
            v-model="textArea"
            class="modal__textArea"
            name="text"
            cols="30"
            rows="5"
          />
          <button
            class="modal__btn"
            @click="saveEdit()"
          >
            Save
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script src="./_dataTable.js" lang="js"></script>
<style src="./_dataTable.scss" lang="scss"></style>
