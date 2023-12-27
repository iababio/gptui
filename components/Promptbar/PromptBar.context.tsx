import { Dispatch, createContext } from 'react';

import { ActionType } from '@/hooks/useCreateReducer';

import { FolderInterface } from '@/types/folder';
import { Prompt } from '@/types/prompt';

import { PromptbarInitialState } from './Promptbar.state';

export interface PromptbarContextProps {
  state: PromptbarInitialState;
  dispatch: Dispatch<ActionType<PromptbarInitialState>>;
  handleCreatePrompt: () => void;
  handleDeletePrompt: (prompt: Prompt) => void;
  handleUpdatePrompt: (prompt: Prompt) => void;
  handleCreatePublicPrompt: (prompt: Prompt) => void;
  handleDeletePublicPrompt: (prompt: Prompt) => void;
  handleUpdatePublicPrompt: (prompt: Prompt) => void;
  handleCreateFolder: () => void;
  handleEditFolder: (folder: FolderInterface) => void;
  handleDeleteFolder: (folder: FolderInterface) => void;
  handleCreatePublicFolder: () => void;
  handleEditPublicFolder: (folder: FolderInterface) => void;
  handleDeletePublicFolder: (folder: FolderInterface) => void;
}

const PromptbarContext = createContext<PromptbarContextProps>(undefined!);

export default PromptbarContext;
