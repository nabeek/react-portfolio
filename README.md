# React Portfolio

## Motivation

This refactored website takes an existing portfolio and rebuilds it using React.

## Usage

My React portfolio is live [here](https://nabeek.github.io/react-portfolio/).

## Screenshot

![react-portfolio](https://user-images.githubusercontent.com/4752937/88250673-826a7700-cc65-11ea-98e8-d52b9dd48c46.png)

## Tech Used

[Bulma](https://bulma.io/)\
[React](https://reactjs.org/)\
[React Icons](https://react-icons.github.io/react-icons/)

## Example Code

Although I'm not too terribly happy with the card styling in Bulma (I should probably rewrite all of this in Bootstrap), the code below shows how each card was populated from a JSON object containing the list of projects for the portfolio.

```js
function Card({ img, name, description, repo, link }) {
  return (
    <div className="card is-3">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <div className="content">{description}</div>
            <div className="has-text-centered">
              <button
                className="button is-link"
                onClick={() => window.open(repo, "_blank")}
              >
                <FaGithub />
              </button>
              <button
                className="button is-link"
                onClick={() => window.open(link, "_blank")}
              >
                <FaLink />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [nabeek](https://github.com/nabeek)
