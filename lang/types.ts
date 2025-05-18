export interface Replacement {
  originalText: string;
  changeText: string;
  /**
   * 검색 타입
   * exact: 정확히 일치하는 경우
   * partial: 부분 일치하는 경우
   */
  searchType: 'exact' | 'partial';
}
