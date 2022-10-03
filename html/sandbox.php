<?php include "./data/includes/main_page_start_sandbox.php";?>

<div class="new-container">
<aside class="settings-aside">
        <form>
            <label>Font</label>
            <input type="text" id="font"><br>
            <label>Font Size</label>
            <input type="text" id="font_size"><br>
            <button id="apply_settings">Save</button>
            <button id="leave_settings">Exit</button>
        </form>
    </aside>
    <header>
        <button id="settings">
            <i class="fa-solid fa-gears"></i>
        </button>
        <button class="toggleButton" id="htmlButton">HTML</button>
        <button class="toggleButton" id="cssButton">CSS</button>
        <button class="toggleButton" id="jsButton">JS</button>
        <button class="toggleButton" id="outputButton">OUTPUT</button>
    </header>
    <main>
        <textarea id="htmlTextarea" class="wndws disabled"></textarea>
        <textarea id="cssTextarea" class="wndws disabled"></textarea>
        <textarea id="jsTextarea" class="wndws disabled"></textarea>
        <iframe id="output" class="wndws disabled"></iframe>
    </main>
</div>


    <script src="js/script_2.js"></script>

<?php include "./data/includes/page_end.php";?>