'use client'
import type { FC } from 'react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import EditItem, { EditItemType } from './edit-item'
import Drawer from '@/app/components/base/drawer-plus'
import { MessageCheckRemove } from '@/app/components/base/icons/src/vender/line/communication'
import DeleteConfirmModal from '@/app/components/base/modal/delete-confirm-modal'
import { editAnnotation } from '@/service/annotation'
import Toast from '@/app/components/base/toast'

type Props = {
  isShow: boolean
  onHide: () => void
  appId: string
  annotationId: string
  query: string
  answer: string
  onSaved: (editedQuery: string, editedAnswer: string) => void
  createdAt?: number
  onRemove: () => void
}

const EditAnnotationModal: FC<Props> = ({
  isShow,
  onHide,
  query,
  answer,
  onSaved,
  appId,
  annotationId,
  createdAt,
  onRemove,
}) => {
  const { t } = useTranslation()

  const handleSave = async (type: EditItemType, editedContent: string) => {
    let postQuery = query
    let postAnswer = answer
    if (type === EditItemType.Query)
      postQuery = editedContent
    else
      postAnswer = editedContent
    await editAnnotation(appId, annotationId, {
      question: postQuery,
      answer: postAnswer,
    })
    onSaved(postQuery, postAnswer)
    Toast.notify({
      message: t('common.api.actionSuccess') as string,
      type: 'success',
    })
  }
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Drawer
        isShow={isShow}
        onHide={onHide}
        maxWidthClassName='!max-w-[480px]'
        title={t('appAnnotation.editModal.title') as string}
        body={(
          <div className='p-6 pb-4 space-y-6'>
            <EditItem
              type={EditItemType.Query}
              content={query}
              onSave={editedContent => handleSave(EditItemType.Query, editedContent)}
            />
            <EditItem
              type={EditItemType.Answer}
              content={answer}
              onSave={editedContent => handleSave(EditItemType.Answer, editedContent)}
            />
          </div>
        )}
        foot={annotationId
          ? (
            <div className='px-4 flex h-16 items-center justify-between border-t border-black/5 bg-gray-50 rounded-bl-xl rounded-br-xl leading-[18px] text-[13px] font-medium text-gray-500'>
              <div
                className='flex items-center pl-3 space-x-2 cursor-pointer'
                onClick={() => setShowModal(true)}
              >
                <MessageCheckRemove />
                <div>{t('appAnnotation.editModal.removeThisCache')}</div>
              </div>
              {createdAt && <div>{t('appAnnotation.editModal.createdAt')}&nbsp;{dayjs(createdAt * 1000).format('YYYY-MM-DD hh:mm')}</div>}
            </div>
          )
          : undefined}
      >
      </Drawer>
      <DeleteConfirmModal
        isShow={showModal}
        onHide={() => setShowModal(false)}
        onRemove={() => {
          onRemove()
          setShowModal(false)
        }}
        text={t('appDebug.feature.annotation.removeConfirm') as string}
      />
    </div>

  )
}
export default React.memo(EditAnnotationModal)
