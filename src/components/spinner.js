export default {
    template:
        `
        <div id="spinner">
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `,
    data() {
        return {
            componentName: 'spinner',
        }
    }
}