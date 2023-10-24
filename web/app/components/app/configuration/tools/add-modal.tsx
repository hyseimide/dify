import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '@/app/components/base/modal'
import Button from '@/app/components/base/button'
import AppIcon from '@/app/components/base/app-icon'
import EmojiPicker from '@/app/components/base/emoji-picker'
import { BookOpen01 } from '@/app/components/base/icons/src/vender/line/education'

type AddModalProps = {
  onCancel: () => void
}
type Emoji = {
  icon: string
  icon_background: string
}
const AddModal: FC<AddModalProps> = ({
  onCancel,
}) => {
  const { t } = useTranslation()
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [emoji, setEmoji] = useState<Emoji>({ icon: '', icon_background: '' })

  return (
    <Modal
      isShow
      onClose={() => {}}
      className='!p-8 !pb-6 !max-w-none !w-[640px]'
    >
      <div className='mb-2 text-xl font-semibold text-gray-900'>
        {t('appDebug.feature.tools.modal.title')}
      </div>
      <div className='py-2'>
        <div className='leading-9 text-sm font-medium text-gray-900'>
          {t('appDebug.feature.tools.modal.toolType.title')}
        </div>
        <input
          className='block px-3 w-full h-9 bg-gray-100 rounded-lg text-sm text-gray-900 outline-none appearance-none'
          placeholder={t('appDebug.feature.tools.modal.toolType.placeholder') || ''}
        />
      </div>
      <div className='py-2'>
        <div className='leading-9 text-sm font-medium text-gray-900'>
          {t('appDebug.feature.tools.modal.name.title')}
        </div>
        <div className='flex items-center'>
          <input
            className='grow block mr-2 px-3 h-9 bg-gray-100 rounded-lg text-sm text-gray-900 outline-none appearance-none'
            placeholder={t('appDebug.feature.tools.modal.name.placeholder') || ''}
          />
          <AppIcon size='large'
            onClick={() => { setShowEmojiPicker(true) }}
            className='!w-9 !h-9 rounded-lg border-[0.5px] border-black/5 cursor-pointer '
            icon={emoji.icon}
            background={emoji.icon_background}
          />
        </div>
      </div>
      <div className='py-2'>
        <div className='leading-9 text-sm font-medium text-gray-900'>
          {t('appDebug.feature.tools.modal.variableName.title')}
        </div>
        <input
          className='block px-3 w-full h-9 bg-gray-100 rounded-lg text-sm text-gray-900 outline-none appearance-none'
          placeholder={t('appDebug.feature.tools.modal.variableName.placeholder') || ''}
        />
      </div>
      <div className='py-2'>
        <div className='flex justify-between items-center h-9 text-sm font-medium text-gray-900'>
          {t('appDebug.feature.tools.modal.apiEndpoint.title')}
          <a
            href={'/'}
            className='flex items-center text-xs text-gray-500'
          >
            <BookOpen01 className='mr-1 w-3 h-3 text-gray-500' />
            {t('appDebug.feature.tools.modal.apiEndpoint.link')}
          </a>
        </div>
        <input
          className='block px-3 w-full h-9 bg-gray-100 rounded-lg text-sm text-gray-900 outline-none appearance-none'
          placeholder={t('appDebug.feature.tools.modal.apiEndpoint.placeholder') || ''}
        />
      </div>
      <div className='py-2'>
        <div className='leading-9 text-sm font-medium text-gray-900'>
          {t('appDebug.feature.tools.modal.apiKey.title')}
        </div>
        <div className='flex items-center'>
          <input
            className='grow mr-2 px-3 py-2 h-9 rounded-lg bg-gray-100 text-sm appearance-none outline-none'
            placeholder={t('appDebug.feature.tools.modal.apiKey.placeholder') || ''}
          />
          <Button
            className='text-sm font-medium'
          >
            {t('appDebug.feature.tools.modal.apiKey.regenerate')}
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-end mt-6'>
        <Button
          onClick={onCancel}
          className='mr-2 text-sm font-medium'
        >
          {t('common.operation.cancel')}
        </Button>
        <Button
          type='primary'
          className='text-sm font-medium'
          onClick={() => {}}
        >
          {t('common.operation.save')}
        </Button>
      </div>
      {
        showEmojiPicker && (
          <EmojiPicker
            onSelect={(icon, icon_background) => {
              setEmoji({ icon, icon_background })
              setShowEmojiPicker(false)
            }}
            onClose={() => {
              setEmoji({ icon: '', icon_background: '' })
              setShowEmojiPicker(false)
            }}
          />
        )
      }
    </Modal>
  )
}

export default AddModal
