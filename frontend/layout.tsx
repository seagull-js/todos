import createElement from 'inferno-create-element'

// this is what your index.html looks like
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Seagull ToDo App</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      </head>
      <body>
        <div className="container">
          <h1>Seagull ToDo App</h1>
          <div id='root' className="">{children}</div>
        </div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  );
}