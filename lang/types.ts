export interface Replacement {
  readonly originalText: string;
  readonly changeText: string;

  /**
   * 검색 타입
   * exact: 정확히 일치하는 경우
   * partial: 부분 일치하는 경우
   */
  readonly searchType: 'exact' | 'partial';

  _changedCount?: number;
}
