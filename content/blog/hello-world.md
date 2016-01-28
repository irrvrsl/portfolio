---
Description: Finishing of my personal portfolio site
Keywords:
- Development
- Design
- Workflow
Section: blog
Slug: hello-world-i-suppose
Tags:
- design
- development
Title: Hello world, i suppose?
Url: blog/hello-world-i-suppose
date: 2015-12-15
---


Thats it! I finally ended my [portfolio](//irrvrsl.github.io "irrvrsl | design and frondent dev") site. It was a long three month of inspiring, desiginig and coding, but i pleasured with results. 

{{< img src="/img/blog/hello-world/irrvrsl.png" >}}

## Searching an Engine

What i've done? First of all, i've decided to not use Wordpress as blog platform. Because it's huge and all that stuff with PHP is not make me happy. I've been searching for something small, fast and easy to use. And i remembered, that Travis from Dev Tips made a cycle of videos about building static site with Jekyll, that's exactly what i wanted! 

First of all i went to the google and asked him for couple of 'modern static site generator'. And i've got a lot of information there. I read some articles and went to [staticgen.com](//www.staticgen.com/) to see what's on top. Of course Jekyll was on top, but it old and not what i wanted. There were two websites fallen into my sight - [Hexo.io](//hexo.io/) and [Hugo](//hugo.io/). The Hexo SSG is written in Javascript(Node.js) and this was one huge plus, because i love JS. I read the documentation and even downloaded a theme, but i didn't like the template system and it's syntax.

~~~html
<!--Hexo template implementation-->

<!DOCTYPE html>
<html>
  <body><%- body %></body>
</html>
~~~

Then i went to Hugo's site and i loved it's documentation, it's really nice. I decided to try it. It's written in Go language and i never heard about it before. But it doesn't matter, because Hugo's syntax is not that bad. Let's take a look on a template:

~~~html
<!--Hugo template implementation-->

{{ partial "header.html"  . }} <!--This is how it implement a template-->
{{ partial "subheader.html"  . }} <!--Pretty obvious, huh?-->
{{ partial "content.html"  . }}
	<section class='section-heading'> 
		{{ with .Site.Params.tags}} <!--Usefull cycle goes here-->
		<h1>{{ .title }}</h1>
		<p>{{ .description }}</p>
		{{end}}
	</section>
	<section class='tag-wrapper'>
	   <h1 class='tag-wrapper__title'>{{ .Title }}</h1>
	    {{ range .Data.Pages }}
	        {{ .Render "summary"}}
	    {{ end }}
	</section>
{{ partial "footer.html" . }}
~~~

## Designing and coding UI

After choosing an engine I had to choose what to use on the client. You know, these days the Material Design from Google is in trend, so why not? I downloaded the [Materializecss](//materializecss.com) framework. You can see what it is more detailed on their website. Nice framework, i like it. But i was confused, when i saw, that Google have their own [framework](//www.getmdl.io/). I will check it next time. Materializecss is pretty customizable, i've just choosen a components that i need in SCSS and JS and started the development process. 

{{< img src="/img/blog/hello-world/mtrlz.jpg" >}}

I wanted to create one of the basic layouts: fixed menu is on the left side and the main content is the rest side. Top navigation is looks boring for me. So I started a work. I've chosen fonts, colors, grid and other 'design stuff'. 

Workflow set was: Gulp and it's plugins, SASS, [GreenSock](//greensock.com) Animation plugin. And the last one is a great tool for animation. I've created 3 cool animations on ['About'](//irrvrsl.github.io/about) page with it, check them out.

Also i tried to use BEM class notation in my project, but have my own vision of it, so i simplified it a bit.

{{< img src="/img/blog/hello-world/subl.jpg" >}}

## Conclusion 

The job is done and i pleasured with it. But there is a lot of optimisations needed to be done. It's not the end.