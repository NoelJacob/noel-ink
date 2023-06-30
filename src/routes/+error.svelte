<script>
    import {page} from '$app/stores';
</script>

<h1 style="color: red;">Error Occurred</h1>
<h1>{$page.error.message}</h1>