import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      memoryMap: {
    0: ["Nuton",      "eats",   "a bland Apple"    ],
    1: ["Tesla",      "drives", "a fresh Car"    ],
    2: ["Einstein",   "showes", "a Sour Tang"    ],
    3: ["Chaplin",    "wears",  "salty shoes"    ],
    4: ["Mozart",     "plays",  "Juicy Music"    ],
    5: ["Elvis",      "sings",  "Sweet Songs"    ],
    6: ["Jackson",    "dances", "Spicy Moves"    ],
    7: ["Armstrong",  "jumps",  "a Cheesy Moon"  ],
    8: ["Wright",     "flyes",  "Crunchy Plains" ],
    9: ["Marilyn",    "hides",  "a Ripe Bottom"  ],
}
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
