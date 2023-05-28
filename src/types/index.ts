export type KeyValuePair = {
  text: string;
  value: string;
};

export interface ReduxAction {
  onSuccess?: (data: any) => void;
  onFailure?: (data: any) => void;
}
