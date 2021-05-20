import DashboardLayout from '@/components/DashboardLayout.vue'
import EmptyLayout from '@/components/EmptyLayout.vue'
export default {
    install: (app) => {
        app.component('default-layout', DashboardLayout)
            .component('empty-layout', EmptyLayout);
    }
}
