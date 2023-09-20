import React, { FC } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import { ConfirmModalProps } from '@/components/ConfirmModal/ConfirmModal.types';
import {
  headerTextBlack,
  normalTextBlack,
  normalTextPrimary,
} from '@/styles/global.styles';

export const ConfirmModal: FC<ConfirmModalProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle sx={headerTextBlack}>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText sx={normalTextBlack}>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} sx={normalTextPrimary}>
        Cancel
      </Button>
      <Button onClick={onConfirm} sx={normalTextPrimary}>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);
