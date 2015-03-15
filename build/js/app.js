$( "#videos" ).on( "click", function( event ) {
    React.render(
        // <BookList url='http://api.nytimes.com/svc/books/v3/lists/2015-03-15/hardcover-fiction.json?api-key=3739f5d87dea2dce19f2e37b0ad46878:4:71536252'/>,
        <BookList url='http://api.nytimes.com/svc/books/v3/lists/2015-03-15/hardcover-fiction.json?callback=books&offset=20&sort-by=list&sort-order=ASC&api-key=df2517f077dbfe37d80601f00aa34870%3A2%3A71587974'/>,
        document.getElementById('content')
    )
})

$( "#activities" ).on( "click", function( event ) {
    React.render(
        <ActivityList url='https://vimeo.com/api/v2/activity/1958639/user_did.json'/>,
        document.getElementById('content')
    )
})


