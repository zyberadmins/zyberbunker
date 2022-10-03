<?php include "./data/includes/main_page_start_sandbox.php";?>


<div class="container">

    <form id="postform">
        <label for="posttitle">Post Title:</label>
        <input type="text" name="post-title" id="post-title">
        <label for="postbody">Post Body:</label>
        <textarea name="postbody" id="postbody"></textarea>
        <input type="submit" value="Submit" class="btn">
    </form>

    <div class="post">
        <div class="post-title">
            <h3>This is a post title</h3>
        </div>
        <div class="post-body">
            <p><pre>This is a posts body</pre></p>
        </div>
    </div>

</div>

<?php include "./data/includes/page_end.php";?>