// URL 格式化函數
export const formatUrlSegment = (segment) => {
  if (!segment) return '';
  return segment
    .toLowerCase()
    .replace(/\s+/g, '_') // 將空格替換為底線
    .replace(/[^a-z0-9_-]/g, ''); // 只保留小寫字母、數字、底線和連字符
};

// 解析 URL 段落
export const parseUrlSegment = (segment) => {
  if (!segment) return '';
  return segment
    .replace(/_/g, ' ') // 將底線替換回空格
    .replace(/(^|\s)\S/g, letter => letter.toUpperCase()); // 首字母大寫
};

// 生成完整的 URL 路徑
export const generatePath = (...segments) => {
  return segments
    .filter(Boolean)
    .map(formatUrlSegment)
    .join('/');
};
