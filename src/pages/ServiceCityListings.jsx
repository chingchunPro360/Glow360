import { formatUrlSegment, parseUrlSegment } from '../utils/urlHelpers';

// ... 其他 import 保持不變 ...

export default function ServiceCityListings() {
  // ... 其他代碼保持不變 ...

  const handleCategoryClick = (categoryName) => {
    navigate(`/service/${formatUrlSegment(categoryName)}`);
  };

  // ... 其他代碼保持不變 ...

  return (
    // ... JSX 保持不變 ...
  );
}
