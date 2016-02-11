/*
  ES6 Modules using ES6 Classes
*/
import React  from 'react';
import ReactDOM  from 'react-dom';
import helpers from './helpers';


var App = React.createClass({

  getInitialState : function() {
    return {
      clippedFlowers: []
    }
  },

  addClippedFlower : function(flower) {
    this.setState({
      clippedFlowers: this.state.clippedFlowers.concat(flower)
    })
  },

  render : function() {
    return (
      <div className="row">
        <div className="column">
          <Header tagline="FLOWER COLLECTION"/>
          <FlowerCollection flowers={this.state.clippedFlowers}/>
        </div>
        <div className="column">
          <Header tagline="FlOWERS"/>
          <FlowerClipper addClippedFlower={this.addClippedFlower}/>
        </div>
      </div>
    )
  }
});

/*
  Header

*/
var Header = React.createClass({
    propTypes : {
      tagline: React.PropTypes.string
    },
    render : function( ) {
        return (
          <header className="top">
            <h1 className='tagline'>{this.props.tagline}</h1>
          </header>
       )
    }
});



/*
  Flower Collection
  all the flowers user has collected, this needs to be saved
*/

var FlowerCollection = React.createClass({
  propTypes: {
    flowers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render : function() {
    return (
      <div className='users-flower-collection'>
        <div className='column'>
          {
            this.props.flowers.map((flower, i) =>
              <div key={i}>
                <Flower flower={flower}/>
              </div>
            )
          }
        </div>
      </div>
    )
  }
});


/*
  FlowerClipper
  This will let us refresh with new image and add image to our collection
*/

var FlowerClipper = React.createClass({

  propTypes: {
    addClippedFlower: React.PropTypes.func.isRequired
  },

  getInitialState : function() {
    return {
      flower : helpers.getFlower()
    };
  },

  updateWithNewRandomFlower : function() {
    this.setState({
      flower : helpers.getFlower()
    });
  },

  addFlowerToCollection: function() {
    this.props.addClippedFlower(this.state.flower);
  },

  render : function() {
    return (
      <div className='flower-selector'>
        <Flower flower={this.state.flower}/>
        <div className='button-row'>
          <button className="addTo" onClick={this.addFlowerToCollection}>
            Collect
          </button>
          <button className="update" onClick={this.updateWithNewRandomFlower}>
            Refresh
          </button>
        </div>
      </div>
    );
  }
});


/*
  This will let give us our flower image and it's details
*/
var Flower = React.createClass({
  propTypes: {
    flower: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div>
        <img
          src={this.props.flower.image}
          style={{height: 250, width: 500}}
        />
        <p>{this.props.flower.name}</p>
        <p>{this.props.flower.desc}</p>
      </div>
    );
  }
});


ReactDOM.render(<App/>, document.querySelector('#main'));


{/*
    I want a SucculentClipper -
    Do I create another Clipper?
    Can I re-use this one? Thinking of layout see paper notes to explain

    Is it better to have Clippers side by side or Separate?

    Succulent Collection
    all succulents user has selected this needs to be saved


    var SucculentCollection = React.createClass({
      propTypes: {
      count: React.PropTypes.object.isRequired
      },
      render : function() {
        return (
          <div className='users-succulent-collection'>
            <h2>Your Saved Succulents</h2>
            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
            </div>
          </div>
        )
      }
    });
*/}
