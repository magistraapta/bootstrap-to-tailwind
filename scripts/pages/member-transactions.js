$(document).ready(function () {
    $('.datatables').DataTable({
        "processing": false,
        "serverSide": false,
        "searching": true,
        "language": {
            "paginate": {
                "previous": "‹",
                "next": "›"
            }
        },
        "order": [
            [0, "desc"]
        ]
    });

    $('.datatables').on('page.dt', function () {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 100);
    });
});
