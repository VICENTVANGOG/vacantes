
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlineEdit } from "react-icons/md";
import Button from '../../atoms/button/button';
import styles from './CardActions.module.scss';

interface CardActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const CardActions: React.FC<CardActionsProps> = ({ onEdit, onDelete }) => {
  return (
    <div className={styles.actions}>
      <Button className={styles.editButton} onClick={onEdit}>
        <MdOutlineEdit size={20} color="#6c63ff" />
      </Button>
      <Button className={styles.deleteButton} onClick={onDelete}>
        <FaTrashAlt size={20} color="#ff4d4d" />
      </Button>
    </div>
  );
};

export default CardActions;
