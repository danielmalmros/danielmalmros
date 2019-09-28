<template>
  <div class="container">
    <article>
      <span class="c-article__tag">(404) Sorry but this page dose not exist.</span>
      <header class="c-article__header">
        <h1 class="u-margin-bottom-m">A brief history of 404</h1>
      </header>
      <strong>What does 404 mean?</strong>

      <p>404 is an HTTP status code. Every time you visit a web page, your computer (the ‘client’) is requesting data from a server using HTTP, or Hypertext Transfer Protocol. Before the web page is even displayed in your browser, the web server has sent the HTTP header, which contains the status code. Not surprisingly, your browser has sent the server its own headers, which contain a lot more information about you than you think!</p>

      <p>For a normal web page, the status is 200 OK. You don’t see this because the server proceeds to send you the contents of the page. It’s only when you encounter an error that you see the actual status code, such as 404 Not Found.</p>

      <strong>So where do status codes come from?</strong>

      <p>HTTP status codes were established by the World Wide Web Consortium (W3C) in 1992, as a part of the HTTP 0.9 spec. They were defined by Tim Berners-Lee, the same person who single-handedly invented the web and the first web browser in 1990. We at the 404 Research Lab like to think of him as The Man Who Made All Of This Possible.</p>

      <p>Berners-Lee based the HTTP status codes on FTP status codes, which were already well established by 1990; the official FTP spec is dated 1985, although FTP has actually been in use much longer.</p>

      <strong>What do the numbers mean?</strong>

      <p>Let’s dissect 404.<br>
      The first 4 indicates a client error. The server is saying that you’ve done something wrong, such as misspell the URL or request a page which is no longer there. Conversely, a 5xx error indicates a server-side problem. It also indicates an error which may be transient; if you try it again, it may work.</p>

      <p>The middle 0 refers to a general syntax error. This could indicate a spelling mistake.</p>

      <p>The last 4 just indicates the specific error in the group of 40x, which also includes 400: Bad Request, 401: Unauthorized, etc.</p>

      <p>It’s been said that 404 was named after a room at CERN (if you read about Tim Berners-Lee above, you’ll know that that’s where the web began) where the original web servers were located. However, Tom S. tells us:</p>

      <blockquote>
        <p>Having visited CERN myself, I can tell you that Room 404 is not on the fourth floor – the CERN office numbering system doesn’t work like that – the first digit usually refers to the *building* number (ie. building 4), and the second two to the office number. But, strangely, there is no room “04” in building “4”, the offices start at “410” and work upwards – don’t ask me why. Sorry to disappoint you all, but there is no Room 404 in CERN – it simply doesn’t exist, and certainly hasn’t been preserved as “the place where the web began”. In fact, there *is* a display about this, including a model of the first NeXT server, but the whole “Room 404″ thing is just a myth.</p>
      </blockquote>

      <p>According to the W3C, 404 Not Found is only supposed to be used in cases where the server cannot find the requested location and is unsure of its status. If a page has permanently been deleted, it is supposed to use 410: Gone to indicate a permanent change. But has anyone ever seen 410? It must be 404…</p>

      Source <a href="http://queenofsubtle.com/404/?page_id=1921">404lab</a>
    </article>
  </div>
</template>

<script>
export default {
  name: '404',
  data() {
    return {
    }
  }
};
</script>
