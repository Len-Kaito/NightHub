import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import AccountTab from '../components/settings/AccountTab';
import BillingTab from '../components/settings/BillingTab';
import PersonalizationTab from '../components/settings/PersonalizationTab';
import PrivacyTab from '../components/settings/PrivacyTab';
import SupportTab from '../components/settings/SupportTab';
import ConfirmModal from '../components/ui/ConfirmModal';
import './Settings.css';

const Settings = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [activeTab, setActiveTab] = useState('account');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleLogoutConfirm = () => {
    setIsLogoutModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterActive(!isFilterActive)} />
      <FilterModal isActive={isFilterActive} onToggle={() => setIsFilterActive(!isFilterActive)} />

      <div className="settings-layout animate-fade-in">
        
        <aside className="settings-sidebar">
          <nav className="sidebar-menu">
            <button className={`sidebar-item ${activeTab === 'account' ? 'active' : ''}`} onClick={() => setActiveTab('account')}>
              <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Tài khoản & Hồ sơ
            </button>
            <button className={`sidebar-item ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>
              <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Gói cước & Thanh toán
            </button>
            <button className={`sidebar-item ${activeTab === 'personalization' ? 'active' : ''}`} onClick={() => setActiveTab('personalization')}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Cá nhân hóa
            </button>
            <button className={`sidebar-item ${activeTab === 'privacy' ? 'active' : ''}`} onClick={() => setActiveTab('privacy')}>
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Quyền riêng tư
            </button>
            <button className={`sidebar-item ${activeTab === 'support' ? 'active' : ''}`} onClick={() => setActiveTab('support')}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Hỗ trợ & Thông tin
            </button>
            <button className="sidebar-item logout" onClick={() => setIsLogoutModalOpen(true)}>
              <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Đăng xuất
            </button>
          </nav>
        </aside>

        <main className="settings-content">
          <AccountTab isActive={activeTab === 'account'} navigate={navigate} />
          <BillingTab isActive={activeTab === 'billing'} />
          <PersonalizationTab isActive={activeTab === 'personalization'} />
          <PrivacyTab isActive={activeTab === 'privacy'} />
          <SupportTab isActive={activeTab === 'support'} />
        </main>
      </div>

      <Footer />

      <ConfirmModal
        isOpen={isLogoutModalOpen}
        title="Đăng xuất"
        description="Bạn có chắc chắn muốn đăng xuất khỏi Nighthub không?"
        onConfirm={handleLogoutConfirm}
        onCancel={() => setIsLogoutModalOpen(false)}
        confirmText="Đăng xuất"
        cancelText="Quay lại"
        isDanger={true}
      />
    </>
  );
};

export default Settings;
