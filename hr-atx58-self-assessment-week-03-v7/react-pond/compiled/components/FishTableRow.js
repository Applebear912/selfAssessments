class FishTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      name: props.fish.name,
      image: props.fish.image,
      description: props.fish.description
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com
  render() {
    return React.createElement(
      "tr",
      { onClick: () => this.setState({ showDescription: !this.state.showDescription }) },
      React.createElement(
        "td",
        { className: "fish-name" },
        this.state.name
      ),
      React.createElement(
        "td",
        null,
        React.createElement("img", { src: this.state.image })
      ),
      this.state.showDescription ? React.createElement(
        "td",
        { className: "fish-description" },
        this.state.description
      ) : null
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: PropTypes.object.isRequired
};

// import and export statements don't work in the Spectator Enviroment.
// Please leave these lines commented out. They are implied.
//export default FishTableRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Zpc2hUYWJsZVJvdy5qcyJdLCJuYW1lcyI6WyJGaXNoVGFibGVSb3ciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNob3dEZXNjcmlwdGlvbiIsIm5hbWUiLCJmaXNoIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInJlbmRlciIsInNldFN0YXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsWUFBTixTQUEyQkMsTUFBTUMsU0FBakMsQ0FBMkM7QUFDekNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUIsS0FETjtBQUVYQyxZQUFNSCxNQUFNSSxJQUFOLENBQVdELElBRk47QUFHWEUsYUFBTUwsTUFBTUksSUFBTixDQUFXQyxLQUhOO0FBSVhDLG1CQUFhTixNQUFNSSxJQUFOLENBQVdFO0FBSmIsS0FBYjtBQU1EOztBQUVEO0FBQ0FDLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFJLFNBQVMsTUFBTSxLQUFLQyxRQUFMLENBQWMsRUFBQ04saUJBQWlCLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxlQUE5QixFQUFkLENBQW5CO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxXQUFkO0FBQTJCLGFBQUtELEtBQUwsQ0FBV0U7QUFBdEMsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLHFDQUFLLEtBQUssS0FBS0YsS0FBTCxDQUFXSSxLQUFyQjtBQURGLE9BRkY7QUFLRyxXQUFLSixLQUFMLENBQVdDLGVBQVgsR0FBNkI7QUFBQTtBQUFBLFVBQUksV0FBVSxrQkFBZDtBQUFrQyxhQUFLRCxLQUFMLENBQVdLO0FBQTdDLE9BQTdCLEdBQThGO0FBTGpHLEtBREY7QUFTRDtBQXRCd0M7O0FBeUIzQztBQUNBO0FBQ0FWLGFBQWFhLFNBQWIsR0FBeUI7QUFDdkJMLFFBQU1NLFVBQVVDLE1BQVYsQ0FBaUJDO0FBREEsQ0FBekI7O0FBS0E7QUFDQTtBQUNBIiwiZmlsZSI6IkZpc2hUYWJsZVJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZpc2hUYWJsZVJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93RGVzY3JpcHRpb246IGZhbHNlLFxuICAgICAgbmFtZTogcHJvcHMuZmlzaC5uYW1lLFxuICAgICAgaW1hZ2U6cHJvcHMuZmlzaC5pbWFnZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5maXNoLmRlc2NyaXB0aW9uXG4gICAgfTtcbiAgfVxuXG4gIC8vIEN1cnJlbnRseSwgdGhlIGltYWdlIGJlaW5nIGRpc3BsYXllZCBpcyBoYXJkY29kZWQgZnJvbSB0aW55dXJsLmNvbVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93RGVzY3JpcHRpb246ICF0aGlzLnN0YXRlLnNob3dEZXNjcmlwdGlvbn0pfT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpc2gtbmFtZVwiPnt0aGlzLnN0YXRlLm5hbWV9PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLmltYWdlfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGVzY3JpcHRpb24gPyA8dGQgY2xhc3NOYW1lPVwiZmlzaC1kZXNjcmlwdGlvblwiPnt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufTwvdGQ+IDogbnVsbH1cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9XG59XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcbkZpc2hUYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIGZpc2g6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuXG4vLyBpbXBvcnQgYW5kIGV4cG9ydCBzdGF0ZW1lbnRzIGRvbid0IHdvcmsgaW4gdGhlIFNwZWN0YXRvciBFbnZpcm9tZW50LlxuLy8gUGxlYXNlIGxlYXZlIHRoZXNlIGxpbmVzIGNvbW1lbnRlZCBvdXQuIFRoZXkgYXJlIGltcGxpZWQuXG4vL2V4cG9ydCBkZWZhdWx0IEZpc2hUYWJsZVJvdztcbiJdfQ==