# Bluff

Humble jQuery tool (humble as a single kilobyte) that automates history push actions.

Can be used just like this:
```sh
$('.some-selector').bluff();
```
and the element of your choice starts recording the actions attached to it, to the browser history 

**bluff gives you three options:**

  - attr: Base attribute to pass data from, and to hash your url. 
  
  - blank: Default data to be passed when url is untouched.
  
  - trigger: Action to be triggered on a browser history event *ex. history.back*
  - Defaults:
```sh
$('.some-selector').bluff({
    attr: 'href',
    blank: '*',
    trigger: 'click'
});
```

# Oh so, what does it *actually* do?

Lets say you have a slider, and you want your slides to change with your browser history.

You add the bluff.js to your document, then initiate the function:

```sh
$('.slider-bullets').bluff({
    attr: 'slide-to-go',
    blank: '1',
    trigger: 'click'
});
```

Now, when you click a slider bullet, the slide you go gets recorded in your browser history, and you can go back and forth between slides, from your browser's back and forward buttons, as if they were seperate webpages.
