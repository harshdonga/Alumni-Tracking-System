$(document).ready(function () {
    $('#ajax_resume').click(function () {
        console.log('POST');
    //     $.ajax({
    //         type: 'POST',
    //         url: '/leave_query',
    //         data: {
    //             csrfmiddlewaretoken: window.CSRF_TOKEN,
    //             'start_date': $('#start_date').val(),
    //             'end_date': $('#end_date').val()
    //         },
    //         success: function (data) {
    //             console.log("POST REQ MADE");
    //         }
    //     })
    });
});