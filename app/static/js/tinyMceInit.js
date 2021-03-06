tinymce.init({
    selector: 'textarea.create-post',
    browser_spellcheck: true,
    relative_urls: false,
    plugins: [
        'advlist autolink autoresize link image lists charmap print preview hr anchor pagebreak spellchecker',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'save table directionality template paste codesample emoticons'
    ],
    style_formats: [
        {
            title: 'Image Left',
            selector: 'img',
            styles: {
                'float': 'left', 'margin-right': '10px'
            }
         },
         {
             title: 'Image Right',
             selector: 'img', 
             styles: {
                 'float': 'right', 'margin-left': '10px'
             }
         }
    ],
    toolbar: 'insertfile undo redo | styleselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist | link image | print preview media fullpage | emoticons',
    images_upload_url: '/blog/create-post',
    images_reuse_filename: false,
    automatic_uploads: true,
    images_upload_base_path: '/static/uploads',
});