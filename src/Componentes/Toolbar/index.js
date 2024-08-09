import './Toolbar.css'
import ToolbarItem from '../ToolbarItem/index';

const Toolbar = ({ items, toolbarClassName }) => {
  return (
    <div className={`toolbar ${toolbarClassName}`}>
      {items.map((item, index) => (
        <ToolbarItem
          key={index}
          iconPaths={item.iconPaths}
          text1={item.text1}
          text2={item.text2}
          iconClassName={item.iconClassName}
          textsClassName={item.textsClassName}
          text1ClassName={item.text1ClassName}
          text2ClassName={item.text2ClassName}
        />
      ))}
    </div>
  );
};

export default Toolbar;
