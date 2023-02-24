import { Link } from './Link'

export const Column = ({ 
  className, 
  dataTitle, 
  classNameTitle, 
  dataLinks, 
  classNameList,
  classNameItem 
}) => {  
  return (
    <li className={className}>
      {dataTitle && <h3 className={classNameTitle}>{dataTitle.content}</h3>}

      {dataLinks?.length > 0 && (
        <ul className={classNameList}>
          {dataLinks.length > 0 && (
            dataLinks.map((link, index) =>
              <li className={classNameItem}>
                <Link link={link} key={index}/>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
};
