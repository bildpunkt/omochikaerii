<template>
  <div class="card shadow border-0 mb-5">
    <div class="card-header">
      <div class="d-flex align-items-center">
        <div class="flex-grow-1">
          Filters
        </div>
        <div>
          <button class="btn btn-primary btn-sm me-1" @click="global.state.filterValue = ''" v-if="global.state.filterValue != ''">Reset</button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p class="fw-bold mb-0">Status:</p>
      <p>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'status:progress'">In Progress</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'status:done'">Done</button>
      </p>
      <p class="fw-bold mb-0">Type:</p>
      <p>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'type:Visual Novel'">Visual Novel</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'type:Manga'">Manga</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'type:Anime'">Anime</button>
      </p>
      <p class="fw-bold mb-0">Arc:</p>
      <p>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'arc:onikakushi'">Onikakushi</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'arc:watanagashi'">Watanagashi</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'arc:tatarigoroshi'">Tatarigoroshi</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'arc:himatsubushi'">Himatsubushi</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'arc:meakashi'">Meakashi</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'arc:tsumihoroboshi'">Tsumihoroboshi</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'arc:minagoroshi'">Minagoroshi</button>
        <button class="btn btn-primary mb-1 me-1" @click="global.state.filterValue = 'arc:matsuribayashi'">Matsuribayashi</button>
      </p>
    </div>
  </div>
</template>

<script>
import global from '../state'

export default {
  name: 'MarathonFilter',
  data: function() {
    return {
      filters: {
        status: [
          'progress',
          'done'
        ],
        type: [
          'Visual Novel',
          'Manga',
          'Anime'
        ],
        arc: [
          'onikakushi',
          'watanagashi',
          'tatarigoroshi',
          'himatsubushi',
          'meakashi',
          'tsumihoroboshi',
          'minagoroshi',
          'matsuribayashi'
        ]
      },
      global
    }
  }
}
</script>