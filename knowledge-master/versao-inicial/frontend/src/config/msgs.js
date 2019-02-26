import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.Toasted.reigster(
    'defaulSuccess',
    payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
    { type: 'success', icon: 'check' }
)

Vue.Toasted.reigster(
    'defaulError',
    payload => !payload.msg ? 'Oops.. Erro inesperado.' : payload.msg,
    { type: 'error', icon: 'times' }
)