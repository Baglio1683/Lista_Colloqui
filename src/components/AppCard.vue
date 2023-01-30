<script>

export default {
    name: 'AppCard',

    data() {
        return {

            job_contact_list: [
                {
                    name: 'IDM Consulting Srl',
                    job_type: 'Full-Stack Java Developer',
                    check: true,
                    received_call: false,
                },
                {
                    name: 'Deloitte',
                    job_type: 'Junior Backend Developer',
                    check: true,
                    received_call: false,
                },
                {
                    name: 'Deloitte',
                    job_type: 'Junior Full-Stack Java Developer',
                    check: true,
                    received_call: false,
                },
                {
                    name: 'Sernicola Labs',
                    job_type: 'Sviluppatore web app e siti',
                    check: true,
                    received_call: true,
                },
                {
                    name: 'Fututa',
                    job_type: 'Fontend Developer',
                    check: true,
                    received_call: false,
                },
                {
                    name: 'GFT Technologiest',
                    job_type: 'Junior Java Developer',
                    check: true,
                    received_call: true,
                },

            ]
        }
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-between ">
            <div class="card col-3 mb-5" v-for="item in job_contact_list">
                <div class="card-body">
                    <h5 class="card-title">Azienda:
                    </h5>
                    <h5 class="text-primary"> {{ item.name }}</h5>
                    <p class="card-text mt-3">Posizione Lavorativa:</p>
                    <p class=" text-secondary">{{ item.job_type }}</p>
                    <p class="mt-3">Visualizzato:
                    <p v-if="item.check" class="text-success"> Si </p>
                    <p v-else class="text-danger"> No</p>
                    </p>
                    <p class="mt-3">Chiamata Ricevuta:
                    <p v-if="item.received_call" class="text-success"> Si </p>
                    <p v-else class="text-danger"> No</p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    margin-right: 5px;
    background-color: lightblue !important;

    p {
        margin-bottom: 0;
    }
}
</style>