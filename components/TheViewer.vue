<template>
    <div id="content" ref="content">
        <template v-if="isLoading">
            <div v-for="index in Array(8)" :key="index" class="hemistich">
                <content-loader width="200" height="24" viewBox="0 0 200 24" class="is-placeholder">
                    <rect x="0" y="0" rx="3" ry="3" width="200" height="24" />
                </content-loader>
            </div>
        </template>
        <template v-else>
            <div v-for="(hemistich, index) in shownHemistiches" :key="index" ref="hemistiches" class="hemistich">
                {{ hemistich }}
            </div>
        </template>
        <transition name="fade">
            <div v-if="tipShown" id="scroll-tip">
                <div class="box is-size-7">
                    به سمت
                    <i class="mdi mdi-arrow-up-thick wobbles"></i>
                    یا
                    <i class="mdi mdi-arrow-down-thick wobbles"></i>
                    آزادانه حرکت کنید. بیت‌ها به تدریج بارگذاری خواهند شد.
                    &nbsp;<i class="mdi mdi-close-circle has-text-danger is-clickable" @click="tipShown = false"></i>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
    name: 'TheViewer',
    components: {ContentLoader},
    props: {
        inPage: {type: Number, default: 200},
        isLoading: {type: Boolean, required: true},
        hemistiches: {type: Array, required: true},
    },
    data() {
        return {
            start: 0,
            end: this.inPage,
            tipShown: true,
        }
    },
    computed: {
        minStart() {
            return 0
        },
        maxEnd() {
            return this.hemistiches.length
        },
        shownHemistiches() {
            return this.hemistiches.slice(this.start, this.end)
        }
    },
    watch: {
        hemistiches() {
            this.start = 0
            this.end = this.inPage
        }
    },
    mounted() {
        this.$refs.content.addEventListener('scroll', this.scrolled)
    },
    methods: {
        scrolled() {
            const container = this.$refs.content
            let offset, anchor, sling
            if (container.scrollTop === 0)
                offset = this.start > this.minStart ? -this.inPage / 2 : 0
            if (container.scrollTop + container.clientHeight >= container.scrollHeight)
                offset = this.end < this.maxEnd ? this.inPage / 2 : 0
            if (offset) {
                this.start = Math.max(this.start + offset, this.minStart)
                this.end = Math.min(this.end + offset, this.maxEnd)
                anchor = this.$refs.hemistiches[Math.abs(offset) - (offset > 0 ? 1 : -1)].offsetTop
                sling = this.$refs.hemistiches[offset > 0 ? this.inPage - 1 : 0].offsetTop
                const offsetTop = container.scrollTop - (sling - anchor)
                container.scrollTo(0, offsetTop)
            }
        }
    }
}
</script>
