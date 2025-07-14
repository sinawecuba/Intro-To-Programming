YUI().use('node', 'anim', 'anim-node-plugin', function(Y) {

    var o = Y.one('#o'),                           // Selects the container element with id="o"
        oW = o.get('offsetWidth'),                 // Gets the container's width
        oH = o.get('offsetHeight'),                // Gets the container's height
        max = 88,                                  // Max size of a bubble in pixels
        min = 22,                                  // Min size of a bubble in pixels
        bubbles = 150,                             // Number of bubbles to create
        timerDelay = 12000;                         // Max delay for bubble creation (8s)

    function makeBubble() {
        var b = Y.Node.create('<span class="bubble"></span>');  // Create a <span> with class "bubble"

        b.plug(Y.Plugin.NodeFX, {                  // Plug in animation functionality
            duration: 7,                           // Duration of animation (7 seconds)
            easing: Y.Easing.easeOut,              // Easing function for smooth animation
            to: {
                top: 0,                            // Animate to the top (float upward)
                opacity: 0                         // Fade out to invisible
            },
            on: {
                end: function() {                  // When animation ends
                    Y.later(10000, this, function() {
                        animBubble(this.get('node'));  // Restart bubble animation after 10 seconds
                    });
                }
            }
        });

        o.append(b);                               // Add the bubble to the container
        animBubble(b);                             // Start animation
    }

    function animBubble(b) {
        var v = Math.floor(Math.random() * (max - min)) + min;  // Random size between min and max

        b.setStyles({
            height: v + 'px',                      // Set height
            width: v + 'px',                       // Set width
            borderRadius: v + 'px',                // Make it circular
            top: (oH + 2) + 'px',                  // Start just below the container
            opacity: 1                             // Fully visible
        });

        b.setStyle('left', Math.floor(Math.random() * (oW - v)));  // Random horizontal position

        b.fx.set('duration', Math.floor(Math.random() * 2 + 3));   // Random animation duration (3–5s)
        b.fx.set('to.top', Math.floor(Math.random() * (oH / 2)));  // Random vertical height it floats to

        b.fx.run();                                                // Run the animation
    }

    for (i = 0; i < bubbles; i++) {
        Y.later(Math.random() * timerDelay, this, function() {     // Stagger creation using delay
            makeBubble();                                          // Create each bubble
        });
    }

});
